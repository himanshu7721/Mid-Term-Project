package com.example.demo.service;

import java.util.LinkedList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Resume;
import com.example.demo.repository.ResumeRepository;

import antlr.collections.List;

@Service
public class ResumeSavingService {
	@Autowired
	ResumeRepository resumerepo;
	/*@Autowired
	EducationRepository edurepo;
	
	@Autowired
	ProjectRepository projectrepo;*/
	public Resume saveresume(Resume resume)
	{
		System.out.println("inside save resume");
		return resumerepo.save(resume);
	}

}
