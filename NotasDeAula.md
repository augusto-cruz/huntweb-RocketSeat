#                       ► ReactJS














Biblioteca JavaScript que manipula a DOM (Arvore de Elementos HTML).


Componentes são em formatos de Classes e extendem de React.Component.

JSX = HTML + JS



create-react-app:

    Já cria o projeto configurado com Babel, WebPack, Transpilação para que funcione corretamente em todos os navegadores.


# Iniciando o Projeto


    - create-react-app huntweb


# Estrutura do Projeto

    node_modules - Dependências do projeto instaladas

    public - Arquivos que são acessados diretamente pelo usuário final

    src - Onde fica todo o código da aplicação

    package.json - Onde fica listado as dependências do projeto


# Componentes

    É um conjunto de parte visual (HTML + CSS) + Lógica (JS).
    Todo componente tem um render() que retorna um conteudo JSX.


    index.js: 

        Entrypoint da aplicação

        ReactDOM.render(<App />, document.getElementById('root'));

            É usada uma única vez na aplicação, que renderiza o primeiro componente App e coloca ele no elemento root do arquivo index.html


# Criando o Componente Header

    Criar pasta components
    Criar pasta Header (Sempre criar uma pasta para cada componente)
    Criar arquivo index.js


    Criando o Componente:

        class Header extends React.Component {
            render() {
                return <header id="main-header">JSHunt</header>
            }
        }

        export default Header;

        Ou

        // Variavel Header que retorna uma função

        // Statles componentes
        // Componentes que são criados com funções (Menos verboso)
        // Usá-se quando não precisa-se manipular o estado do componente

        const Header = () => <header id="main-header">JSHunt</header>;

        export default Header;
        
        
        ===
        
         const Header = () => {
            return (
                <header id="main-header">JSHunt</header>
            );
         }

        export default Header;
        
        


# Buscando produtos na API

    Instalar axios

        - npm install axios


    Criar pasta services dentro de src
    Criar arquivo api.js

        Configurá-lo com a baseUrl

    Criar pasta pages dentro de src
    Criar pasta main
    Criar arquivo index.js


    React tem metodos de ciclo de vida que executam automaticamente.

        // É o metodo executado logo que o componente é exibido em tela
        componentDidMount() {
        
        }

    Funções já presentes no react podem usar a estrutura:

        componentDidMount() {     

        };

    Funções Criadas devem usar Arrow Functions, pois senão a função não conseguirá enxergar o escopo (variavél this) e também não sobreescreverá seu valor:

        loadProducts = () => {

        };


# Estado

    No React usa-se state para guardar os valores para que possam ser acessados de qualquer lugar do componente.

         state = {
            products: [],
        }

    Para setar um valor:

        this.setState({ products: response.data.docs });

    Para recuperar:

        {this.state.products}


    

    O render sempre fica escutando o estado das variaveis e sempre que houver uma alteração ele executara novamente trazendo as alterações.


    • Percorrer Lista de Produtos:

        Uma boa prática é que o primeiro elemento logo depois do map tenha uma key única:

        {this.state.products.map(product => (
            <h2 key={product._id}>{product.title}</h2>
        ))}


# Rotas

    Instalar:

        - npm install react-router-dom

    Na pasta src criar o arquivo routes.js



    import { BrowserRouter, Switch, Route } from 'react-router-dom'
        





