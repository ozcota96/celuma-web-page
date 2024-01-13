package com.celuma.webapi.persistence;
import com.celuma.webapi.domain.ProductDTO;
import com.celuma.webapi.domain.ProductDetailDTO;
import com.celuma.webapi.domain.repository.ProductRepository;
import com.celuma.webapi.persistence.crud.ProductoCrudRepository;
import com.celuma.webapi.persistence.entity.Producto;
import com.celuma.webapi.persistence.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public class ProductoRepository implements ProductRepository {

    @Autowired
    private ProductoCrudRepository productoCrudRepository;
    @Autowired
    private ProductMapper mapper;

    @Override
    public List<ProductDTO> getAll () {
        List<Producto> productos = (List<Producto>) productoCrudRepository.findAll();
        return mapper.toProducts(productos);
    }

    @Override
    public Optional<List<ProductDTO>> getByStatus(Boolean status) {
        return Optional.empty();
    }

    @Override
    public Optional<ProductDetailDTO> getProduct(int idProducto) {
        return productoCrudRepository.findById(idProducto).map(producto -> mapper.toProductDetail(producto));
    }

    @Override
    public ProductDTO save(ProductDTO productDTO) {
        return null;
    }


    @Override
    public void delete(int productId) {
        productoCrudRepository.deleteById(productId);
    }

}