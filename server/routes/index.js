import express from 'express';
import mcache from 'memory-cache';
import axios from 'axios';

const server = express.Router();


// memory-cache set up
const cache = (duration) => {
    return (req, res, next) => {
        const key = '_express_' + req.originalUrl || req.url;
        const cachedBody = mcache.get(key);
        if(cachedBody) {
            console.log('cache')
            res.send(cachedBody);
            return;
        }else {
            console.log('no cache')
            res.sendResponse = res.send;
            res.send = (body) => {
                mcache.put(key, body, duration * 1000);
                res.sendResponse(body)
            }
            next();
        }
    }
}

// route to get products via search bar
server.get('/search', cache(1800), (req, res) => {
    const { q } = req.query;

    axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
    .then(res => {
        return res.data;
    })
    .then(data => {
        const products = [];
        data.results.map(p => {
            products.push({
                id: p.id,
                title: p.title,
                price: p.price,
                currency_id: p.currency_id,
                condition: p.condition,
                stock: p.available_quantity,
                thumbnail: p.thumbnail,
                link: p.permalink
            })
        })
        return res.send(products)
    })
    .catch(err => {
        console.log(err);
    });
});

// route to get all categories 
server.get('/categories', cache(1800), (req, res) => {
    axios
    .get(`https://api.mercadolibre.com/sites/MLA/categories`)
    .then(res => {
        return res.data;
    })
    .then(data => {
        const categories = [];
        data.map(c => {
            categories.push({
                id: c.id,
                name: c.name
            })
        })
        return res.send(categories)
    })
    .catch(err => {
        console.log(err);
    });
});

// route to get products by category
server.get('/products', cache(1800), (req, res) => {
    const { category } = req.query
    axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?category=${category}`)
    .then(res => {
        return res.data;
    })
    .then(data => {
        const proByCategory = [];
        data.results.map(p => {
            proByCategory.push({
                id: p.id,
                title: p.title,
                price: p.price,
                currency_id: p.currency_id,
                condition: p.condition,
                stock: p.available_quantity,
                thumbnail: p.thumbnail,
                link: p.permalink
            })
        })
        return res.send(proByCategory)
    })
    .catch(err => {
        console.log(err);
    });
});


export default server;
