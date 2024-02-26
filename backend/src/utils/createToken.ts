import { sign } from "jsonwebtoken";

/**
 * @param user
 * @param daysExpiresIn
 * @returns
 */

export const createToken = (user: any, daysExpiresIn: number = 1): string => {
  return sign(user, process.env.JWT_SECRET as string, {
    expiresIn: `${daysExpiresIn}d`,
  });
};
