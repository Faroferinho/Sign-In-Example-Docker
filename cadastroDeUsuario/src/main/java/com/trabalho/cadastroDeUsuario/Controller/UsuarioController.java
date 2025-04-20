package com.trabalho.cadastroDeUsuario.Controller;

import com.trabalho.cadastroDeUsuario.Model.Usuario;
import com.trabalho.cadastroDeUsuario.Model.dto.UsuarioDTO;
import com.trabalho.cadastroDeUsuario.Service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private UsuarioService usuarioService;

    public UsuarioController(UsuarioService UsuarioService){
        this.usuarioService = UsuarioService;
    }

    @PostMapping
    public ResponseEntity<Usuario> createUsuario(@RequestBody UsuarioDTO body){
        var IdUsuario = usuarioService.createUsuario(body);
        return ResponseEntity.created(URI.create("/usuarios/" + IdUsuario.toString())).build();
    }

    @GetMapping("/{IdUsuario}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable("IdUsuario") String IdUsuario){
        var usuario = usuarioService.getUsuarioById(IdUsuario);
        if(usuario.isPresent()){
            return ResponseEntity.ok(usuario.get());
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> listUsuarios() {
        var listaUsuarios = usuarioService.listUsuarios();
        return ResponseEntity.ok(listaUsuarios);
    }
}
