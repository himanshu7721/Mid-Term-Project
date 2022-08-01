package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Resume;
import com.example.demo.repository.ResumeRepository;

@Service
public class UpdateService {
	@Autowired
	ResumeRepository resumerepo;
	
	public ResponseEntity<Resume> updateemail(long id,Resume resume)
	{
		Resume resume1=resumerepo.findById(id).orElseThrow(()->new ResourceNotFoundException("resume not exist with id: " + id));
		resume1.setEmailid(resume.getEmailid());
		resume1.setAddress(resume.getAddress());
		resume1.setPhonenumber(resume.getPhonenumber());
		Resume res=resumerepo.save(resume1);
		return ResponseEntity.ok(res);
	}
}
