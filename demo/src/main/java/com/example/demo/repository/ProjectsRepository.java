package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Projects;
import com.example.demo.entity.Resume;

public interface ProjectsRepository extends JpaRepository<Projects, Long>{

	List<Projects> findAllByResume(Resume resume);

}
