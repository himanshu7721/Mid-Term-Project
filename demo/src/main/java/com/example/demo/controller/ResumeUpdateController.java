package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Resume;
import com.example.demo.service.UpdateService;

@RestController
public class ResumeUpdateController {
	
	@Autowired
	UpdateService updateservice;
	
	@PutMapping("/updateemail/{id}")
	public ResponseEntity<Resume> updatefunc(@PathVariable("id") long id, @RequestBody Resume resume)
	{
		return updateservice.updateemail(id,resume);
		
	}
	

}
