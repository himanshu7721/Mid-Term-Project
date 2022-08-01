package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Education;
import com.example.demo.entity.Projects;
import com.example.demo.entity.Resume;
import com.example.demo.repository.EducationRepository;
import com.example.demo.repository.ProjectsRepository;
import com.example.demo.repository.ResumeRepository;

@Service
public class AllResumesService {

	
	@Autowired
	ResumeRepository resumerepo;
	
	@Autowired
	EducationRepository edurepo;
	
	@Autowired
	ProjectsRepository prorepo;
	public List<Resume> getAllResume()
	{
		return resumerepo.findAll();
	}
	public List<Education> getAllEducation(Resume resume)
	{
		return edurepo.findAllByResume(resume);
	}
	public List<Projects> getAllProjects(Resume resume)
	{
		return prorepo.findAllByResume(resume);
	}
}
