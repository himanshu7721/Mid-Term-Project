package com.example.demo;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import org.hibernate.criterion.ProjectionList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;

import com.example.demo.entity.Education;
import com.example.demo.entity.Projects;
import com.example.demo.entity.Resume;
import com.example.demo.repository.EducationRepository;
import com.example.demo.repository.ProjectsRepository;
import com.example.demo.repository.ResumeRepository;
import com.example.demo.service.ResumeSavingService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootApplication
public class AssessmentApplication {
	/*@Autowired
	static ResumeSavingService reservice;*/
	
	public static void main(String[] args) {
		SpringApplication.run(AssessmentApplication.class, args);
	}
	
	@Bean
	  public CommandLineRunner demo(ResumeRepository resumerepository, EducationRepository edurepo, ProjectsRepository prorepo) {
		
		
		return (args) -> {
			List<String> skills=new LinkedList<String>();
		skills.add("java");
		skills.add("java2");
		
		List<String> languages=new LinkedList<>();
		languages.add("hindi");
		languages.add("english");
		
		List<String> interests=new LinkedList<>();
		interests.add("playing");
		interests.add("game");
		
		Resume resume=new Resume(1,"name","dob","8898989","address","emailid",skills,languages,interests);
		
		resumerepository.save(resume);
		
		List<Education> edulist=new LinkedList<Education>();
		Education edu=new Education(1,"hbpose","98",resume);
		edurepo.save(edu);
		edulist.add(edu);
		
		
		List<Projects> projectlist=new LinkedList<Projects>();
		Projects p=new Projects(9090,"sampleplproject","devoloper",resume);
		prorepo.save(p);
		projectlist.add(p);
		
		
		
		try {
			//resumerepository.save(resume);

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		log.info("Table Data inserted");
		};
	}

}
