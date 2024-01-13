package com.celuma.webapi.persistence.crud;

import com.celuma.webapi.persistence.entity.Categoria;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CategoriaCrudRepository extends CrudRepository<Categoria, Integer> {

}
