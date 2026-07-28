const supabase = require("../config/supabase");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  process.env.JWT_SECRET || "HR_PILOT_SECRET_KEY";

exports.register = async ({
  name,
  email,
  password,
}) => {
  const { data: existing } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (existing) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        name,
        email,
        password: hashedPassword,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const token = jwt.sign(
    {
      id: data.id,
      email: data.email,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return {
    user: {
      id: data.id,
      name: data.name,
      email: data.email,
    },
    token,
  };
};

exports.login = async ({
  email,
  password,
}) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !data) {
    throw new Error("Invalid email or password");
  }

  const valid = await bcrypt.compare(
    password,
    data.password
  );

  if (!valid) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      id: data.id,
      email: data.email,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return {
    user: {
      id: data.id,
      name: data.name,
      email: data.email,
    },
    token,
  };
};

exports.profile = async (id) => {
  const { data, error } = await supabase
    .from("users")
    .select("id,name,email")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};