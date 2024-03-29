package com.softuni.Mobilelele.service.impl;

import com.softuni.Mobilelele.model.entity.User;
import com.softuni.Mobilelele.model.entity.UserRole;
import com.softuni.Mobilelele.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AppUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public AppUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userOptional = userRepository.findByUsername(username);

        if (userOptional.isEmpty()) {
            throw new UsernameNotFoundException("Username not found");
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        User user = userOptional.get();
        authorities.add(new SimpleGrantedAuthority(user.getRole().getRole().toString()));
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

//    private UserDetails map(User userEntity) {
//        return new org.springframework.security.core.userdetails.User(
//                userEntity.getUsername(),
//                userEntity.getPassword(),
//                asGrantedAuthorities(List.of(userEntity.getRole()))
//        );
//    }
//
//    private List<GrantedAuthority> asGrantedAuthorities(List<UserRole> roleEntities) {
//        return roleEntities.
//                stream().
//                map(r -> new SimpleGrantedAuthority("ROLE_" + r.getRole().name())).
//                collect(Collectors.toList());
//    }
}
