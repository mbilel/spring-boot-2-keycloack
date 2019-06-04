package com.example.microservice.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
import org.keycloak.adapters.springsecurity.KeycloakConfiguration;
import org.keycloak.adapters.springsecurity.authentication.KeycloakAuthenticationProvider;
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.mapping.SimpleAuthorityMapper;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.security.web.authentication.logout.LogoutFilter;
import org.springframework.security.web.authentication.preauth.x509.X509AuthenticationFilter;
import org.springframework.security.web.authentication.session.NullAuthenticatedSessionStrategy;
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy;
import org.springframework.security.core.session.SessionRegistryImpl;

@KeycloakConfiguration
public class SecurityConfig extends KeycloakWebSecurityConfigurerAdapter {

    /**
     * Registers the KeycloakAuthenticationProvider with the authentication manager.
     */
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        KeycloakAuthenticationProvider keycloakAuthenticationProvider = keycloakAuthenticationProvider();

        // adding proper authority mapper for prefixing role with "ROLE_"
        keycloakAuthenticationProvider.setGrantedAuthoritiesMapper(new SimpleAuthorityMapper());

        auth.authenticationProvider(keycloakAuthenticationProvider);
    }

    /**
     * Provide a session authentication strategy bean which should be of type
     * RegisterSessionAuthenticationStrategy for public or confidential applications
     * and NullAuthenticatedSessionStrategy for bearer-only applications.
     */
    @Bean
    @Override
    protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
    	// required for bearer-only applications.
        return new NullAuthenticatedSessionStrategy();
    	//return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
    }

    /**
     * Use properties in application.properties instead of keycloak.json
     */
    @Bean
    public org.keycloak.adapters.KeycloakConfigResolver KeycloakConfigResolver() {
        return new KeycloakSpringBootConfigResolver();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*");
            }
        };
    }
    
    /**
     * Secure appropriate endpoints
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	 super.configure(http);
         http.authorizeRequests()
         .antMatchers(HttpMethod.OPTIONS).permitAll()
         .antMatchers("/public/**").permitAll()
         .antMatchers("/api/unsecured").permitAll()
         .antMatchers("/api/resource/**").hasRole("manager") // only manager with role user are allowed to access
         .antMatchers("/api/ip").hasRole("administrator"); 
         http.authorizeRequests().anyRequest().permitAll();
         
//    	http
//          // disable csrf because of API mode
//          .csrf().disable()
//          .sessionManagement()
//           // use previously declared bean
//              .sessionAuthenticationStrategy(sessionAuthenticationStrategy())
//              .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//          // keycloak filters for securisation
//          .and()
//              .addFilterBefore(keycloakPreAuthActionsFilter(), LogoutFilter.class)
//              .addFilterBefore(keycloakAuthenticationProcessingFilter(), X509AuthenticationFilter.class)
//              .exceptionHandling().authenticationEntryPoint(authenticationEntryPoint())
//          // delegate logout endpoint to spring security
//          .and()
//              .logout()
//              .addLogoutHandler(keycloakLogoutHandler())
//              .logoutUrl("/logout").logoutSuccessHandler(
//              // logout handler for API
//              (HttpServletRequest request, HttpServletResponse response, Authentication authentication) ->
//                      response.setStatus(HttpServletResponse.SC_OK)
//           );
//
//        http.authorizeRequests()
//        .antMatchers("/api/unsecured").permitAll()
//        .antMatchers("/api/**").hasRole("manager"); // only manager with role user are allowed to access
//        http.authorizeRequests().anyRequest().permitAll();
    }
}
