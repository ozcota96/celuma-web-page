package com.celuma.webapi.domain.service;

import com.celuma.webapi.domain.Product;
import com.celuma.webapi.domain.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAll(){
        return productRepository.getAll();
    }

    public Optional<Product> getProduct(int productId) {
        return productRepository.getProduct(productId);
    }

    public Optional<List<Product>> getByStatus(Boolean status) {
        return productRepository.getByStatus(status);
    }

    public Product save(Product product) {
        return productRepository.save(product);
    }

    public Boolean delete(Integer productId) {
        return getProduct(productId).map(product -> {productRepository.delete(productId);
            return true;
        }).orElse(false);
    }

}
