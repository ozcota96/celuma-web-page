package com.celuma.webapi.persistence.entity;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "product_order")
public class ProductoOrden implements Serializable {

    @EmbeddedId
    private ProductoOrdenPK id;

    @Column(name = "products_quantity")
    private Integer cantidad;

    @ManyToOne
    @JoinColumn(name = "product_id", updatable = false, insertable = false)
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "order_id", updatable = false, insertable = false)
    @MapsId("ordenId")
    private Orden orden;

    // Getters and Setters

    public ProductoOrdenPK getId() {
        return id;
    }

    public void setId(ProductoOrdenPK id) {
        this.id = id;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Orden getOrden() {
        return orden;
    }

    public void setOrden(Orden orden) {
        this.orden = orden;
    }
}
