# CP1 – Database Normalization
## Project: SocioFy

## 1. Project Overview

SocioFy is a college-exclusive social networking platform designed to connect students and support academic and social collaboration.

The platform is intended to provide the following features:

- Student profiles and connections
- Interest-based communities
- Campus events and registrations
- Student project collaboration
- Project skills and team members

The purpose of this document is to organize the proposed database structure and normalize it up to Third Normal Form (3NF).

## 2. Initial Database Requirements

The proposed database needs to store the following information:

1. Student information, including name, college email, college, department and academic year.
2. Community information, including name, description and category.
3. Student membership in different communities.
4. Campus event information and event registrations.
5. Project information and project ownership.
6. Skills required by projects.
7. Students participating in projects.

A student can join multiple communities, register for multiple events and participate in multiple projects.

## 3. Unnormalized Form (UNF)

Initially, all information can be represented in a single large record containing student information and repeating groups of communities, events and projects.

Example:

| Student ID | Student Name | College Email | Communities | Events | Projects |
|---|---|---|---|---|---|
| 1 | Rahul | rahul@college.edu | Web Dev, AI/ML | Hackathon, Workshop | Study Assistant, Expense Tracker |

This structure contains repeating groups because one student can have multiple communities, events and projects.

It also creates data redundancy and makes insertion, updating and deletion difficult.

Therefore, the structure needs to be normalized.

## 4. First Normal Form (1NF)

A relation is in First Normal Form when:

- Each column contains atomic values.
- There are no repeating groups.
- Each record can be uniquely identified.

To achieve 1NF, repeating community, event and project values are separated into individual records.

The following relations are proposed:

### STUDENT

| Student_ID (PK) | Full_Name | College_Email | College_Name | Department | Academic_Year |
|---|---|---|---|---|---|

### COMMUNITY

| Community_ID (PK) | Community_Name | Description | Category |
|---|---|---|---|

### COMMUNITY_MEMBERSHIP

| Student_ID (PK, FK) | Community_ID (PK, FK) | Joined_At | Role |
|---|---|---|---|

### EVENT

| Event_ID (PK) | Title | Category | Event_Date | Location | Description | Organizer |
|---|---|---|---|---|---|---|

### EVENT_REGISTRATION

| Event_ID (PK, FK) | Student_ID (PK, FK) | Registered_At | Status |
|---|---|---|---|

### PROJECT

| Project_ID (PK) | Title | Description | Category | Owner_ID (FK) | Open_Positions |
|---|---|---|---|---|---|

### PROJECT_SKILL

| Project_ID (PK, FK) | Skill_Name (PK) |
|---|---|

### PROJECT_MEMBER

| Project_ID (PK, FK) | Student_ID (PK, FK) | Member_Role |
|---|---|---|

All values are atomic, and repeating groups have been separated into individual relations.

Therefore, the proposed relations satisfy 1NF.

## 5. Functional Dependencies

Functional dependencies describe how one attribute determines another attribute.

The following functional dependencies are identified:

### STUDENT

Student_ID → Full_Name, College_Email, College_Name, Department, Academic_Year

College_Email → Student_ID, Full_Name, College_Name, Department, Academic_Year

### COMMUNITY

Community_ID → Community_Name, Description, Category

### COMMUNITY_MEMBERSHIP

(Student_ID, Community_ID) → Joined_At, Role

### EVENT

Event_ID → Title, Category, Event_Date, Location, Description, Organizer

### EVENT_REGISTRATION

(Event_ID, Student_ID) → Registered_At, Status

### PROJECT

Project_ID → Title, Description, Category, Owner_ID, Open_Positions

### PROJECT_SKILL

(Project_ID, Skill_Name) → No additional non-key attributes

### PROJECT_MEMBER

(Project_ID, Student_ID) → Member_Role

The primary keys uniquely identify the records in their respective relations.

## 6. Second Normal Form (2NF)

A relation is in Second Normal Form when:

- It is already in 1NF.
- Every non-key attribute is fully dependent on the entire candidate key.
- There are no partial dependencies.

In the proposed database, STUDENT, COMMUNITY, EVENT and PROJECT have single-attribute primary keys. Therefore, partial dependency on a composite primary key does not arise in these relations.

The following relations use composite primary keys:

- COMMUNITY_MEMBERSHIP
- EVENT_REGISTRATION
- PROJECT_SKILL
- PROJECT_MEMBER

Their non-key attributes depend on the complete composite key.

For example:

(Student_ID, Community_ID) → Joined_At, Role

Joined_At and Role depend on the complete combination of Student_ID and Community_ID.

Similarly:

(Event_ID, Student_ID) → Registered_At, Status

Registered_At and Status depend on both Event_ID and Student_ID.

No partial dependencies are present in these proposed relations.

Therefore, the relations satisfy 2NF.

## 7. Third Normal Form (3NF)

A relation is in Third Normal Form when:

- It is already in 2NF.
- It contains no transitive dependency of non-key attributes on a candidate key.

The proposed relations are examined for transitive dependencies.

For example, the STUDENT relation stores student-specific information. Community details are stored separately in COMMUNITY, event details are stored separately in EVENT, and project details are stored separately in PROJECT.

Student membership information is stored in COMMUNITY_MEMBERSHIP rather than repeating community details in the STUDENT relation.

Likewise, event registration information is stored separately in EVENT_REGISTRATION.

Project skills and team memberships are stored in separate relations.

This separation ensures that non-key attributes remain dependent on the key, the whole key and nothing but the key.

Therefore, the proposed relations satisfy 3NF under the stated functional dependencies.

## 8. Final Normalized Database Relations

The final proposed database contains the following relations:

| Relation | Primary Key |
|---|---|
| STUDENT | Student_ID |
| COMMUNITY | Community_ID |
| COMMUNITY_MEMBERSHIP | Student_ID, Community_ID |
| EVENT | Event_ID |
| EVENT_REGISTRATION | Event_ID, Student_ID |
| PROJECT | Project_ID |
| PROJECT_SKILL | Project_ID, Skill_Name |
| PROJECT_MEMBER | Project_ID, Student_ID |

### Foreign Key Relationships

1. COMMUNITY_MEMBERSHIP.Student_ID references STUDENT.Student_ID.
2. COMMUNITY_MEMBERSHIP.Community_ID references COMMUNITY.Community_ID.
3. EVENT_REGISTRATION.Event_ID references EVENT.Event_ID.
4. EVENT_REGISTRATION.Student_ID references STUDENT.Student_ID.
5. PROJECT.Owner_ID references STUDENT.Student_ID.
6. PROJECT_SKILL.Project_ID references PROJECT.Project_ID.
7. PROJECT_MEMBER.Project_ID references PROJECT.Project_ID.
8. PROJECT_MEMBER.Student_ID references STUDENT.Student_ID.

## 9. Benefits of Normalization

Normalization provides the following benefits:

- Reduces duplicate data.
- Improves data consistency.
- Avoids insertion, update and deletion anomalies.
- Maintains clear relationships between entities.
- Makes the database easier to maintain and extend.
- Supports efficient management of student activities.

## 10. Conclusion

The proposed SocioFy database structure has been organized through First Normal Form, Second Normal Form and Third Normal Form.

Repeating groups have been separated, partial dependencies have been eliminated, and transitive dependencies have been avoided under the identified functional dependencies.

The resulting structure provides a clear foundation for implementing the student networking, community, event and project collaboration features of SocioFy.

**Normalization Level Achieved: Third Normal Form (3NF).**