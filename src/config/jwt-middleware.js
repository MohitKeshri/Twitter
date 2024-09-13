import JWT from "passport-jwt";
import User from "../models/user.js";

const JwtStratergy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "twitter_secret",
};

export const passportAuth = (passport) => {
  try {
    passport.use(
      new JwtStratergy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if (!user) {
          done(null, false);
        } else {
          done(null, user);
        }
      })
    );
  } catch (error) {
    throw error;
  }
};
