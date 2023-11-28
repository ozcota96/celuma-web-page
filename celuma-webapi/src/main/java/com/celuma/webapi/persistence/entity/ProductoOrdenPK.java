package com.celuma.webapi.persistence.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class ProductoOrdenPK implements Serializable {

    @Column(name = "product_id")
    private Integer productoId;

    @Column(name = "order_id")
    private Integer ordenId;

    // Getters and Setters

    public Integer getProductoId() {
        return productoId;
    }

    public void setProductoId(Integer productoId) {
        this.productoId = productoId;
    }

    public Integer getOrdenId() {
        return ordenId;
    }

    public void setOrdenId(Integer ordenId) {
        this.ordenId = ordenId;
    }
}
