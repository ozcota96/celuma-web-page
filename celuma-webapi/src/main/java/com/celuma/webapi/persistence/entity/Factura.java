package com.celuma.webapi.persistence.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "invoices")
public class Factura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "invoices")
    private Integer facturaId;

    @Column(name = "order_id")
    private Integer idOrden;

    @Column(name = "name")
    private String nombre;

    private String rfc;

    private String zip;

    @Column(name = "fiscal_regime")
    private String regimenFiscal;

    @OneToOne
    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    private Orden orden;

}
