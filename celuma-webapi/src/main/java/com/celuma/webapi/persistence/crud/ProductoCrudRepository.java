package com.celuma.webapi.persistence.crud;

import com.celuma.webapi.persistence.entity.Producto;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductoCrudRepository extends CrudRepository<Producto, Integer> {

    List<Producto> findByEstado(Boolean estado);


}
