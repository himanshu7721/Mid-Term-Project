package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Education;
import com.example.demo.entity.Resume;

public interface EducationRepository extends JpaRepository<Education, Long>{



	List<Education> findAllByResume(Resume resume);

}
