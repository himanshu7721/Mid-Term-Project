package com.example.demo.entity;

import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import lombok.Data;

@Entity
public class Resume implements Serializable  {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long resume_id;
	private String name;
	private String date_of_birth;
	private String phonenumber;
	private String address;
	private String emailid;
	
	//@LazyCollection(LazyCollectionOption.FALSE)
	@ElementCollection(targetClass=String.class)
	private List<String> skills;
	
	//@LazyCollection(LazyCollectionOption.FALSE)
	@ElementCollection(targetClass=String.class)
	private List<String> languages_known;
	
	//@LazyCollection(LazyCollectionOption.FALSE)
	@ElementCollection(targetClass=String.class)
	private List<String> interests;
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(targetEntity=Education.class, mappedBy = "resume")
	List<Education> education_list;
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(targetEntity=Projects.class, mappedBy = "resume")
	List<Projects> projects_Worked;

	
	public Resume() {
		super();
	}



	public Resume(long resume_id, String name, String date_of_birth, String phonenumber, String address, String emailid,
			List<String> skills, List<String> languages_known, List<String> interests) {
		super();
		this.resume_id = resume_id;
		this.name = name;
		this.date_of_birth = date_of_birth;
		this.phonenumber = phonenumber;
		this.address = address;
		this.emailid = emailid;
		this.skills = skills;
		this.languages_known = languages_known;
		this.interests = interests;
	}
	
	
	public long getResume_id() {
		return resume_id;
	}



	public void setResume_id(long resume_id) {
		this.resume_id = resume_id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getDate_of_birth() {
		return date_of_birth;
	}



	public void setDate_of_birth(String date_of_birth) {
		this.date_of_birth = date_of_birth;
	}



	public String getPhonenumber() {
		return phonenumber;
	}



	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getEmailid() {
		return emailid;
	}



	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}



	public List<String> getSkills() {
		return skills;
	}



	public void setSkills(List<String> skills) {
		this.skills = skills;
	}



	public List<String> getLanguages_known() {
		return languages_known;
	}



	public void setLanguages_known(List<String> languages_known) {
		this.languages_known = languages_known;
	}



	public List<String> getInterests() {
		return interests;
	}



	public void setInterests(List<String> interests) {
		this.interests = interests;
	}



	
	
	
}
