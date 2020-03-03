import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {

    state = {
        products: [],
        productInfo: [],
        page: 1,
    }

    // Metodo executado logo que o componente é exibido em tela
    componentDidMount() {
        this.loadProducts();
    }

    // Utiliza-se arrow function 
    // Recebe a pagina na funcao, se for 0 ele usa 1
    loadProducts = async (page = 1) => {
        const response = await api.get('/products?page=' + page);

        // api.get('/products?page=${page}');

        // Rest Operator
        // Pega o docs e armazena todo o resto no productInfo
        // e também cria as duas variaveis
        const { docs, ... productInfo } = response.data;

        // salva o products como docs, o productInfo como productInfo e o page no page
        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        // Pega o estado
        const { page, productInfo } = this.state;

        // Se já tiver na primeira página simplesmente retorna
        if (page === 1) return;

        // Se não estiver na ultima pagina
        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        // Pega o estado
        const { page, productInfo } = this.state;

        // Se já tiver na ultima página simplesmente retorna
        if (page === productInfo.pages) return;

        // Se não estiver na ultima pagina
        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    render() {

        const { products, page, productInfo } = this.state;

        return(
            <div className="product-list">
                {/* map percorre todos os items */}
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                       <Link to={"/products/" + product._id}>Acessar</Link>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        );
    }
}