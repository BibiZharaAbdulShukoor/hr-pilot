const supabase = require("../config/supabase");

// GET ALL JOBS WITH PAGINATION + SEARCH

exports.getAllJobs = async (options = {}) => {
  const {
    page = 1,

    limit = 10,

    search = "",
  } = options;

  const from = (page - 1) * limit;

  const to = from + limit - 1;

  let query = supabase
    .from("jobs")
    .select("*", { count: "exact" })
    .range(from, to)
    .order("created_at", {
      ascending: false,
    });

  if (search) {
    query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`);
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

// GET JOB BY ID

exports.getJobById = async (id) => {
  const { data, error } = await supabase

    .from("jobs")

    .select("*")

    .eq("id", id)

    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// CREATE JOB

exports.createJob = async (jobData) => {
  const {
    data,

    error,
  } = await supabase

    .from("jobs")

    .insert(jobData)

    .select()

    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// UPDATE JOB

exports.updateJob = async (id, updateData) => {
  const {
    data,

    error,
  } = await supabase

    .from("jobs")

    .update(updateData)

    .eq("id", id)

    .select()

    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// DELETE JOB

exports.deleteJob = async (id) => {
  const { error } = await supabase

    .from("jobs")

    .delete()

    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
};
