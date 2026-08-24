package employee_management_system.controller;

import employee_management_system.entity.Employee;
import employee_management_system.service.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/addEmployee")
    public ResponseEntity<?> addEmployee(
            @Valid @RequestBody Employee employee) {

        try {

            return ResponseEntity.ok(
                    employeeService.addEmployee(employee)
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

    @GetMapping("/getEmployees")
    public ResponseEntity<List<Employee>> getEmployees() {
        return ResponseEntity.ok(
                employeeService.getEmployees()
        );
    }

    @GetMapping("/getEmpById/{id}")
    public ResponseEntity<Employee> getEmployeeById(
            @PathVariable Integer id) {

        return employeeService
                .getEmployeeById(id)
                .map(ResponseEntity::ok)
                .orElse(
                        ResponseEntity.notFound().build()
                );
    }

    @PutMapping("/updateEmployee")
    public ResponseEntity<?> updateEmployee(
            @Valid @RequestBody Employee employee) {

        try {

            return ResponseEntity.ok(
                    employeeService.updateEmployee(employee)
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

    @DeleteMapping("/deleteEmp/{id}")
    public ResponseEntity<Void> deleteEmployee(
            @PathVariable Integer id) {

        employeeService.deleteEmployee(id);

        return ResponseEntity.noContent().build();
    }
}