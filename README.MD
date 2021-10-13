# JWT
```
nota: El login y el signUp (register) no se deben proteger, porque son las encargadas de generar el token
```
### Headers
La forma en la que se pasan los tokens es por el HEADER
Usando la palabra reserva
```
Authorization: Bearer <token>
```
### Status
```
200: ok
403: forbidden (falta de permisos) unathorization
500: internal error
404: not found
401: error message
201: created
```