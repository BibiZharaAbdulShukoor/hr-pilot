const supabase = require("../config/supabase");

// ======================================
// CREATE NOTIFICATION
// ======================================

exports.create = async ({
  title,
  message,
  type = "info",
}) => {
  const { data, error } = await supabase
    .from("notifications")
    .insert({
      title,
      message,
      type,
    })
    .select()
    .single();

  if (error) {
    console.error("Notification Error:", error);

    throw new Error(error.message);
  }

  return data;
};

// ======================================
// GET LATEST NOTIFICATIONS
// ======================================

exports.getLatest = async (limit = 10) => {
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .order("created_at", {
      ascending: false,
    })
    .limit(limit);

  if (error) {
    console.error("Notification Fetch Error:", error);

    throw new Error(error.message);
  }

  return data || [];
};

// ======================================
// DELETE ONE NOTIFICATION
// ======================================

exports.delete = async (id) => {
  const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);

    throw new Error(error.message);
  }

  return true;
};

// ======================================
// CLEAR ALL NOTIFICATIONS
// ======================================

exports.clearAll = async () => {
  const { error } = await supabase
    .from("notifications")
    .delete()
    .gt("id", 0);

  if (error) {
    console.error(error);

    throw new Error(error.message);
  }

  return true;
};