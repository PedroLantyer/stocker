## IMPORTANTE:
* O React utiliza as **portas 5173 e 4173**.
* O MySQL utiliza a **porta 3306**.
* A API utiliza a **porta 8080**.
* Todas as interações com a BD são geridas pela API, não é necessário criar as tabelas manualmente.
* A Base de dados está configurada para utilizar uma conexão com **USERNAME "root"** e **senha "admin"**.
* O Login e a senha da BD podem ser alterados no ficheiro "aplication.properties", que está localizado em "API/stocker_api/src/main/resources".
* Favor manter a porta 8080 para o uso da API. Caso contrário sera necessário alterar a constante "hostLink" localizada na primeira linha do fichero "apiLinks.jsx", que está localizado em "src/utils"

### REQUISITOS:
* **Node 20.9**
* **Java 21.0.2**

### Bugs conhecidos:
* Utilizar o simbolo "#" na senha causa problemas de autenticação.
