-Creé un nuevo proyecto Node.js con npm init -y en la terminal.
-Instalé las dependencias necesarias, en este caso express y jsonwebtoken
-Configuré dos rutas principales en mi aplicación Express:
    /login: Para autenticar a los usuarios y generar un token JWT.
    /verify: Para verificar la validez del token JWT.
-En la ruta /login, verifiqué las credenciales del usuario con una lista de usuarios simulada.Si las credenciales son válidas, generé un token JWT con una expiración de 30 minutos(puede ser menos).
-Implementé un middleware de verificación de tokens (verifyToken) en un archivo separado (authMiddleware.js).Este middleware se utilizó en la ruta /verify para validar la autenticidad y vigencia del token.