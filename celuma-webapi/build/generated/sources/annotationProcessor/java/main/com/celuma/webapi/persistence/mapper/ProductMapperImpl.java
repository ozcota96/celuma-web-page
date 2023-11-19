package com.celuma.webapi.persistence.mapper;

import com.celuma.webapi.domain.Product;
import com.celuma.webapi.persistence.entity.Producto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-11-17T00:07:12-0600",
    comments = "version: 1.5.5.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.2.1.jar, environment: Java 17.0.8 (Oracle Corporation)"
)
@Component
public class ProductMapperImpl implements ProductMapper {

    @Autowired
    private CategoryMapper categoryMapper;

    @Override
    public Product toProduct(Producto producto) {
        if ( producto == null ) {
            return null;
        }

        Product product = new Product();

        product.setProductId( producto.getIdProducto() );
        product.setName( producto.getNombre() );
        product.setCategoryId( producto.getIdCategoria() );
        product.setContent( producto.getContenido() );
        product.setInstructions( producto.getInstrucciones() );
        product.setCautions( producto.getPrecauciones() );
        product.setActive( producto.getEstado() );
        product.setCategory( categoryMapper.toCategory( producto.getCategorias() ) );

        return product;
    }

    @Override
    public List<Product> toProducts(List<Producto> productos) {
        if ( productos == null ) {
            return null;
        }

        List<Product> list = new ArrayList<Product>( productos.size() );
        for ( Producto producto : productos ) {
            list.add( toProduct( producto ) );
        }

        return list;
    }

    @Override
    public Producto toProducto(Product product) {
        if ( product == null ) {
            return null;
        }

        Producto producto = new Producto();

        producto.setIdProducto( product.getProductId() );
        producto.setNombre( product.getName() );
        producto.setIdCategoria( product.getCategoryId() );
        producto.setContenido( product.getContent() );
        producto.setInstrucciones( product.getInstructions() );
        producto.setPrecauciones( product.getCautions() );
        producto.setEstado( product.getActive() );
        producto.setCategorias( categoryMapper.toCategoria( product.getCategory() ) );

        return producto;
    }
}
