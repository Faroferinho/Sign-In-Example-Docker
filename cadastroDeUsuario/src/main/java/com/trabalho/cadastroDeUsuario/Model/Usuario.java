package com.trabalho.cadastroDeUsuario.Model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "db_usuario")
public class Usuario {

    @Id
    private UUID IdUsuario;

    @Column(name = "nome")
    private String nome;

    @Column(name = "telefone")
    private String telefone;

    public Usuario(){}

    public Usuario(UUID idUsuario, String nome, String telefone) {
        this.IdUsuario = idUsuario;
        this.nome = nome;
        this.telefone = telefone;
    }

    public UUID getIdUsuario() {
        return IdUsuario;
    }

    public String getNome() {
        return nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setIdUsuario(UUID idUsuario) {
        IdUsuario = idUsuario;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}
