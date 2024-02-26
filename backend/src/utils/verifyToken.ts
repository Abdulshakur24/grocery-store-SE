import { JwtPayload, verify } from "jsonwebtoken";

export const verifyToken = async (
  token: string
): Promise<string | JwtPayload | null | undefined> => {
  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is not set in environment variables");
    return;
  }

  if (!token || token.split(".").length !== 3) {
    console.error("Invalid token format");
    return;
  }

  try {
    const decodedToken = verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    return decodedToken;
  } catch (err: any) {
    console.error(err.message);
  }
};
