# 📐 Dominando o CSS Grid

Guia prático e resumo sobre os principais conceitos do **CSS Grid**, ferramenta essencial para a criação de layouts bidimensionais (linhas e colunas simultaneamente) na web.

---

## 🚀 Conceitos Principais

O CSS Grid permite dividir a tela ou containers em uma estrutura de malha, facilitando o posicionamento preciso de elementos sem a necessidade de hacks complexos.

### 1. `grid-template-columns`
Define o número e o tamanho das **colunas** que serão criadas no grid.
* **Exemplo de uso:** `grid-template-columns: repeat(4, 1fr);` (Cria 4 colunas com tamanhos iguais distribuídas no espaço disponível).

### 2. `grid-template-rows`
Define a quantidade e o tamanho das **linhas** no grid.
* **Exemplo de uso:** `grid-template-rows: repeat(7, 1fr);` (Cria 7 linhas proporcionais).

### 3. `grid-template-areas`
Permite nomear áreas específicas do grid, facilitando a organização visual dos elementos de forma intuitiva diretamente no código CSS.

---

## 💡 Propriedades de Posicionamento (Filhos)

* **`grid-column`**: Define o espaço que o item vai ocupar nas colunas (ex: `grid-column: 1 / 5;`).
* **`grid-row`**: Define o espaço que o item vai ocupar nas linhas (ex: `grid-row: 1 / 3;`).

---

## 🛠️ Exemplo Prático de Estrutura

```css
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
}