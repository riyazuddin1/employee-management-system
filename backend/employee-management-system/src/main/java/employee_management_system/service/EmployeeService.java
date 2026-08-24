package employee_management_system.service;

import employee_management_system.entity.Employee;
import employee_management_system.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee addEmployee(Employee employee) {

        if (employeeRepository.existsById(employee.getId())) {
            throw new RuntimeException(
                    "Employee ID " + employee.getId()
                            + " already exists. Please use a different ID."
            );
        }

        return employeeRepository.save(employee);
    }

    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Integer id) {
        return employeeRepository.findById(id);
    }

    public Employee updateEmployee(Employee employee) {

        if (!employeeRepository.existsById(employee.getId())) {
            throw new RuntimeException(
                    "Employee ID " + employee.getId()
                            + " does not exist."
            );
        }

        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Integer id) {
        employeeRepository.deleteById(id);
    }
}