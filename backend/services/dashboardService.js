const supabase = require("../config/supabase");

// =====================================
// GET DASHBOARD STATS
// =====================================

exports.getDashboardStats = async () => {
  // ============================
  // TOTAL CANDIDATES
  // ============================

  const { count: totalCandidates, error: candidateCountError } = await supabase
    .from("candidates")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (candidateCountError) {
    throw new Error(candidateCountError.message);
  }

  // ============================
  // TOTAL JOBS
  // ============================

  const { count: totalJobs, error: jobCountError } = await supabase
    .from("jobs")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (jobCountError) {
    throw new Error(jobCountError.message);
  }

  // ============================
  // TOP AI CANDIDATES
  // ============================

  const { data: topCandidates, error: topError } = await supabase
    .from("candidates")
    .select(
      `
      id,
      name,
      email,
      score
    `,
    )
    .order("score", {
      ascending: false,
    })
    .limit(5);

  if (topError) {
    throw new Error(topError.message);
  }

  // ============================
  // RECENT CANDIDATES
  // ============================

  const { data: recentCandidates, error: recentError } = await supabase
    .from("candidates")
    .select(
      `
      id,
      name,
      email,
      skills,
      created_at
    `,
    )
    .order("created_at", {
      ascending: false,
    })
    .limit(5);

  if (recentError) {
    throw new Error(recentError.message);
  }

  // ============================
  // RECENT JOBS
  // ============================

  const { data: recentJobs, error: recentJobsError } = await supabase
    .from("jobs")
    .select(
      `
      id,
      title,
      created_at
    `,
    )
    .order("created_at", {
      ascending: false,
    })
    .limit(5);

  if (recentJobsError) {
    throw new Error(recentJobsError.message);
  }

  // ============================
  // AI METRICS
  // ============================

  const aiAccuracy = 94;

  const hiringRate = 85;

  // ============================
  // NOTIFICATIONS
  // ============================

  const notifications = [
    {
      id: 1,

      title: "New AI Match Found",

      message: "Candidates matched with available jobs.",

      type: "success",

      time: "5 min ago",
    },

    {
      id: 2,

      title: "New Candidate Uploaded",

      message: "A new CV has been added to the system.",

      type: "info",

      time: "20 min ago",
    },

    {
      id: 3,

      title: "AI Analysis Completed",

      message: "Candidate ranking has been updated.",

      type: "ai",

      time: "1 hour ago",
    },
  ];

  // ============================
  // RETURN DATA
  // ============================

  return {
    totalCandidates: totalCandidates || 0,

    totalJobs: totalJobs || 0,

    topCandidates: topCandidates || [],

    recentCandidates: recentCandidates || [],

    recentJobs: recentJobs || [],

    aiAccuracy,

    hiringRate,

    notifications,
  };
};
