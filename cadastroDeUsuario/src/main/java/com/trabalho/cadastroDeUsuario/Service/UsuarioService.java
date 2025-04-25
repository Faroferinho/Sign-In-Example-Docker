package com.trabalho.cadastroDeUsuario.Service;

import com.trabalho.cadastroDeUsuario.Model.Usuario;
import com.trabalho.cadastroDeUsuario.Model.dto.UsuarioDTO;
import com.trabalho.cadastroDeUsuario.Repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UsuarioService {
    private UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

    public UUID createUsuario(UsuarioDTO usuarioDTO){
        var entity = new Usuario(UUID.randomUUID(), usuarioDTO.nome(), usuarioDTO.telefone());

        var UsuarioSalvo = usuarioRepository.save(entity);

        return UsuarioSalvo.getIdUsuario();
    }

    public Optional<Usuario> getUsuarioById(String IdUsuario){
        return usuarioRepository.findById(UUID.fromString(IdUsuario));
    }

    public List<Usuario> listUsuarios() {
        return usuarioRepository.findAll();
    }
}
