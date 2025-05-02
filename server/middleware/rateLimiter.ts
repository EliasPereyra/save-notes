import rateLimit from "express-rate-limit";

// Poder personalizar el limiter a algunas rutas
export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limita a cada IP hasta 100 solicitudes por `window`
  standardHeaders: true, // Regresa info sobre el rate limit en el header `RateLimit-*`
  legacyHeaders: false, // Desactiva las cabeceras `X-RateLimit-*`
});
