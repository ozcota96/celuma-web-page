package com.celuma.webapi.domain.repository;

import com.celuma.webapi.domain.ProductDTO;
import com.celuma.webapi.domain.ProductDetailDTO;

import java.util.List;
import java.util.Optional;

public interface ProductRepository {

    List<ProductDTO> getAll();

    Optional<List<ProductDTO>> getByStatus(Boolean status);

    Optional<ProductDetailDTO> getProduct(int productId);

    ProductDTO save(ProductDTO productDTO);

    void delete(int productId);

}
