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
			
			//skills
			
			List<String> skills=new LinkedList<String>();
		skills.add("java");
		skills.add("c language");
		skills.add("React JS");
		skills.add("Angular JS");
		skills.add("My SQL");
		skills.add("HTML");
		skills.add("CSS");
		skills.add("javaScript");
		skills.add("NOde JS");
		skills.add("Data Structure");
		skills.add("Eclipse");
		skills.add("java2");
		
		//languages
		
		List<String> languages=new LinkedList<>();
		languages.add("Hindi");
		languages.add("English");
		
		List<String> Strength=new LinkedList<>();
		Strength.add("Hardworking and Smart working");
		Strength.add("Ambitious");
		Strength.add("Teamwork");
		Strength.add("Good Listener");
		Strength.add("Punctuality");
		//interests
		
		List<String> interests=new LinkedList<>();
		interests.add("Outdoor Gaming");
		interests.add("ER Sports");
		interests.add("Hiking");
		interests.add("Coding");
		interests.add("Travelling");
		
		
		//Resumes
		
		Resume resume=new Resume();
		resume.setName("Himanshu Sharma");
		resume.setAddress("Chandigarh");
		resume.setDate_of_birth("11/07/1999");
		resume.setEmailid("temp123@gmail.com");
		resume.setPhonenumber("9876543210");
		resume.setInterests(interests);
		resume.setLanguages_known(languages);
		resume.setSkills(skills);
		resume.setStrength(Strength);
		
		
		//Education
		
		
		//Education edu=new Education(1,"hbpose","98",resume);
		
		Education edu=new Education();
		edu.setBoard_name("Saraswati Vidya Mandir High School,Namhol, Bilaspur (Himachal Pradesh)-10th");
		edu.setPercentage("CGPA/Percentage- 78.0%");
		edu.setResume(resume);
		
		
		Education eduobj=new Education();
		eduobj.setBoard_name("National Public Sen. Sec. School Dhundan, Solan (Himachal Pradesh)-12th");
		eduobj.setPercentage("CGPA/Percentage- 75.80%");
		eduobj.setResume(resume);
		
		Education eduobj1=new Education();
		eduobj1.setBoard_name("Bachelor in Computer Science Engineering from Chitkara University(Pursuing)");
		eduobj1.setPercentage("CGPA/Percentage- 98.80%");
		eduobj1.setResume(resume);
		
		List<Education> edulist=new LinkedList<Education>();
		edulist.add(edu);
		edulist.add(eduobj);
		edulist.add(eduobj1);
		
		
		//edurepo.saveAll(edulist);
		
		
		//Projects
		
		
		Projects p=new Projects();
		p.setProject_name("Angular and SpringBoot project on Agriculture Loan Portal. Technologies used are springboot and angular.");
		p.setProject_role("Developer");
		p.setResume(resume);
		
		Projects probje=new Projects();
		probje.setProject_name("Project on Car Selling Platform using angular and springboot.");
		probje.setProject_role("Writter and Researcher");
		probje.setResume(resume);
		
		
		Projects probje1=new Projects();
		probje1.setProject_name("Research paper on Intelligent Health Monitoring System using wearable devices\n and Smartphones.");
		probje1.setProject_role("Writter and Researcher");
		probje1.setResume(resume);
		
		Projects probje2=new Projects();
		probje2.setProject_name("Project on Automatic Room Cleaner with the help of Arduino and ultrasonic sensors.");
		probje2.setProject_role("Writter and Researcher");
		probje2.setResume(resume);
		
		List<Projects> projectlist=new LinkedList<Projects>();
		projectlist.add(p);
		projectlist.add(probje);
		projectlist.add(probje1);
		projectlist.add(probje2);
		
		
		resume.setEducation_list(edulist);
		resume.setProjects_Worked(projectlist);
		resumerepository.save(resume);
		
		
		
		prorepo.saveAll(projectlist);
		edurepo.saveAll(edulist);
		
		System.out.println("done");
		log.info("Table Data inserted");
		};
	}

}
