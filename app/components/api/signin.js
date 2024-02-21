export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Server-side validations:
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error:
          "Password must contain at least one capital letter, one number, and be 8 characters long.",
      });
    }

    // const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // if (!emailRegex.test(email)) {
    //   return res.status(400).json({ error: "Invalid email" });
    // }

    if (email && password) {
      console.log("successful signin");
      return res.status(200).json({ message: "Sign-in successful!" });
    } else {
      console.log("signin failed");
      return res.status(401).json({ error: "Invalid password." });
    }
  } else {
    res.status(405).end();
  }
}
