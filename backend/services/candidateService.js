const supabase = require("../config/supabase");

// =============================
// GET ALL CANDIDATES
// =============================

exports.getAllCandidates = async (options = {}) => {
  const { page = 1, limit = 10, search = "" } = options;

  const from = (page - 1) * limit;

  const to = from + limit - 1;

  let query = supabase
    .from("candidates")
    .select("*", { count: "exact" })
    .range(from, to)
    .order("created_at", {
      ascending: false,
    });

  if (search) {
    query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%`);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return {
    data,

    pagination: {
      page,

      limit,

      total: count,
    },
  };
};

// =============================
// GET SINGLE CANDIDATE
// =============================

exports.getCandidateById = async (id) => {
  const { data, error } = await supabase
    .from("candidates")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// =============================
// CREATE CANDIDATE
// =============================

exports.createCandidate = async (candidate) => {
  const { data, error } = await supabase
    .from("candidates")
    .insert(candidate)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// =============================
// UPDATE CANDIDATE
// =============================

exports.updateCandidate = async (id, data) => {
  const { data: candidate, error } = await supabase
    .from("candidates")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return candidate;
};

// =============================
// DELETE CANDIDATE
// =============================

exports.deleteCandidate = async (id) => {
  const { error } = await supabase.from("candidates").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
};

// =============================
// GET CANDIDATES FOR MATCHING
// =============================

exports.getCandidatesForMatching = async () => {
  const { data, error } = await supabase.from("candidates").select(
    `
      id,
      name,
      email,
      skills,
      embedding
      `,
  );

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
