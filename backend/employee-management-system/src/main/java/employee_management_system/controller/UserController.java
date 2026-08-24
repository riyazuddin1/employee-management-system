package employee_management_system.controller;

import employee_management_system.entity.User;
import employee_management_system.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            return ResponseEntity.status(201)
                    .body(userService.register(user));

        } catch (RuntimeException e) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {

        boolean valid = userService.login(
                user.getUsername(),
                user.getPassword()
        );

        if (valid) {
            return ResponseEntity.ok(
                    Map.of(
                            "message", "Login successful",
                            "username", user.getUsername()
                    )
            );
        }

        return ResponseEntity.status(401)
                .body(
                        Map.of(
                                "message",
                                "Invalid username or password"
                        )
                );
    }

    @GetMapping("/profile/{username}")
    public ResponseEntity<?> getProfile(
            @PathVariable String username) {

        try {

            User user = userService.getUserByUsername(username);

            return ResponseEntity.ok(
                    Map.of(
                            "id", user.getId(),
                            "firstName", user.getFirstName(),
                            "lastName", user.getLastName(),
                            "username", user.getUsername()
                    )
            );

        } catch (RuntimeException e) {

            return ResponseEntity.status(404)
                    .body(
                            Map.of(
                                    "message",
                                    e.getMessage()
                            )
                    );
        }
    }

    @PutMapping("/profile/{username}")
    public ResponseEntity<?> updateProfile(
            @PathVariable String username,
            @RequestBody Map<String, String> data) {

        try {

            User updatedUser =
                    userService.updateProfile(
                            username,
                            data.get("firstName"),
                            data.get("lastName")
                    );

            return ResponseEntity.ok(
                    Map.of(
                            "message",
                            "Profile updated successfully",

                            "firstName",
                            updatedUser.getFirstName(),

                            "lastName",
                            updatedUser.getLastName(),

                            "username",
                            updatedUser.getUsername()
                    )
            );

        } catch (RuntimeException e) {

            return ResponseEntity.badRequest()
                    .body(
                            Map.of(
                                    "message",
                                    e.getMessage()
                            )
                    );
        }
    }
}