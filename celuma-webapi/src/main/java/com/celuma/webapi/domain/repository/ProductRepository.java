package com.celuma.webapi.domain.repository;

import com.celuma.webapi.domain.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepository {

    List<Product> getAll();
    Optional<List<Product>> getByStatus(Boolean status);
    Optional<Product> getProduct(Integer idProducto);
    Product save(Product product);
    void delete(Integer productId);

}
