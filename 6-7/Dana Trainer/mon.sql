USE [master]
GO
/****** Object:  Database [students]    Script Date: 8/21/2021 12:30:53 AM ******/
CREATE DATABASE [students]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'students', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\students.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'students_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\students_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [students] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [students].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [students] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [students] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [students] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [students] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [students] SET ARITHABORT OFF 
GO
ALTER DATABASE [students] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [students] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [students] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [students] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [students] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [students] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [students] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [students] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [students] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [students] SET  ENABLE_BROKER 
GO
ALTER DATABASE [students] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [students] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [students] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [students] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [students] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [students] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [students] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [students] SET RECOVERY FULL 
GO
ALTER DATABASE [students] SET  MULTI_USER 
GO
ALTER DATABASE [students] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [students] SET DB_CHAINING OFF 
GO
ALTER DATABASE [students] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [students] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [students] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [students] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'students', N'ON'
GO
ALTER DATABASE [students] SET QUERY_STORE = OFF
GO
USE [students]
GO
/****** Object:  Table [dbo].[book]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[book](
	[bookid] [int] IDENTITY(1,1) NOT NULL,
	[bookname] [varchar](255) NOT NULL,
	[courseid] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[bookid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[categorey]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[categorey](
	[id] [int] NOT NULL,
	[categoreyname] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[courseId] [int] IDENTITY(1,1) NOT NULL,
	[CourseName] [varchar](10) NOT NULL,
	[CoursePrice] [float] NOT NULL,
	[cateid] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[courseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[login]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[login](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](255) NOT NULL,
	[password] [varchar](255) NOT NULL,
	[rolename] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[std]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[std](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fname] [varchar](10) NOT NULL,
	[lname] [varchar](10) NOT NULL,
	[email] [varchar](25) NOT NULL,
	[phonenumber] [varchar](17) NOT NULL,
	[dateofbirth] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[categorey] ([id], [categoreyname]) VALUES (1, N'weeb')
INSERT [dbo].[categorey] ([id], [categoreyname]) VALUES (2, N'program')
GO
SET IDENTITY_INSERT [dbo].[Course] ON 

INSERT [dbo].[Course] ([courseId], [CourseName], [CoursePrice], [cateid]) VALUES (41, N'c#', 300, 1)
INSERT [dbo].[Course] ([courseId], [CourseName], [CoursePrice], [cateid]) VALUES (42, N'C#', 400, 2)
INSERT [dbo].[Course] ([courseId], [CourseName], [CoursePrice], [cateid]) VALUES (43, N'c++', 500, 2)
INSERT [dbo].[Course] ([courseId], [CourseName], [CoursePrice], [cateid]) VALUES (44, N'.net', 100, 1)
INSERT [dbo].[Course] ([courseId], [CourseName], [CoursePrice], [cateid]) VALUES (45, N'django', 10, 1)
SET IDENTITY_INSERT [dbo].[Course] OFF
GO
SET IDENTITY_INSERT [dbo].[login] ON 

INSERT [dbo].[login] ([id], [username], [password], [rolename]) VALUES (1, N'monther', N'monther', N'admin')
INSERT [dbo].[login] ([id], [username], [password], [rolename]) VALUES (2, N'client', N'123456', N'client')
SET IDENTITY_INSERT [dbo].[login] OFF
GO
SET IDENTITY_INSERT [dbo].[std] ON 

INSERT [dbo].[std] ([id], [fname], [lname], [email], [phonenumber], [dateofbirth]) VALUES (1, N'monther', N'aljodeh', N'montheraljodeh@outlook.co', N'+962787086359', CAST(N'2021-08-14' AS Date))
INSERT [dbo].[std] ([id], [fname], [lname], [email], [phonenumber], [dateofbirth]) VALUES (2, N'monther', N'aljodeh', N'montheraljodeh@outlook.co', N'+962787086359', CAST(N'2021-08-14' AS Date))
INSERT [dbo].[std] ([id], [fname], [lname], [email], [phonenumber], [dateofbirth]) VALUES (3, N'monther', N'aljodeh', N'montheraljodeh@outlook.co', N'+962787086359', CAST(N'2021-08-14' AS Date))
INSERT [dbo].[std] ([id], [fname], [lname], [email], [phonenumber], [dateofbirth]) VALUES (4, N'monther', N'aljodeh', N'montheraljodeh@outlook.co', N'+962787086359', CAST(N'2021-08-14' AS Date))
INSERT [dbo].[std] ([id], [fname], [lname], [email], [phonenumber], [dateofbirth]) VALUES (5, N'monther', N'aljodeh', N'montheraljodeh@outlook.co', N'0787086359', CAST(N'2021-08-14' AS Date))
INSERT [dbo].[std] ([id], [fname], [lname], [email], [phonenumber], [dateofbirth]) VALUES (7, N'jfoigdgh', N'fjhdfo', N'bfdsiobg@gidf.com', N'4', CAST(N'2021-08-15' AS Date))
INSERT [dbo].[std] ([id], [fname], [lname], [email], [phonenumber], [dateofbirth]) VALUES (9, N'fetrett', N'fdsge', N'fgdg@gmail.com', N'4847897897', CAST(N'2021-08-17' AS Date))
INSERT [dbo].[std] ([id], [fname], [lname], [email], [phonenumber], [dateofbirth]) VALUES (10, N'fdgdrg', N'fdgdfg', N'fggfdg@outddf.com', N'556987', CAST(N'2021-08-20' AS Date))
INSERT [dbo].[std] ([id], [fname], [lname], [email], [phonenumber], [dateofbirth]) VALUES (11, N'', N'aljodeh', N'montheraljodeh@outlook.co', N'+962787086359', CAST(N'2021-08-14' AS Date))
INSERT [dbo].[std] ([id], [fname], [lname], [email], [phonenumber], [dateofbirth]) VALUES (12, N'jopjpojpoj', N'aljodeh', N'montheraljodeh@outlook.co', N'+962787086359', CAST(N'2021-08-14' AS Date))
SET IDENTITY_INSERT [dbo].[std] OFF
GO
ALTER TABLE [dbo].[book]  WITH CHECK ADD FOREIGN KEY([courseid])
REFERENCES [dbo].[Course] ([courseId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Course]  WITH CHECK ADD FOREIGN KEY([cateid])
REFERENCES [dbo].[categorey] ([id])
ON DELETE CASCADE
GO
/****** Object:  StoredProcedure [dbo].[DeleteById]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 create PrOc [dbo].[DeleteById] @Id int
 as
 delete from Course
 where courseId=@Id
GO
/****** Object:  StoredProcedure [dbo].[GetAll]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[GetAll]
as
select * from Course
GO
/****** Object:  StoredProcedure [dbo].[getall1]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[getall1]
as
select c.courseId,c.CourseName,c.CoursePrice,b.bookid,b.bookname from Course c
inner join book b
on b.courseid=c.courseId

GO
/****** Object:  StoredProcedure [dbo].[GetById]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 create proc [dbo].[GetById] @Id int
 as
 select * from Course
 where courseId=@Id
GO
/****** Object:  StoredProcedure [dbo].[getCourse]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getCourse] 
as
select c.courseID,c.CourseName from Course c
GO
/****** Object:  StoredProcedure [dbo].[getcoursebyname]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getcoursebyname] @coursename varchar(20)
as
select * from Course where CourseName=@coursename
GO
/****** Object:  StoredProcedure [dbo].[InsertCourse]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 create proc [dbo].[InsertCourse] @CourseName varchar(10),@CoursePrice float
 as
 insert into Course values(@CourseName,@CoursePrice)
GO
/****** Object:  StoredProcedure [dbo].[login1]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create proc [dbo].[login1] @username varchar(255),@password varchar(255)
as
select username,password,rolename from login
where username=@username and password=@password
GO
/****** Object:  StoredProcedure [dbo].[maxcourse]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[maxcourse]
as
select max(CoursePrice) from Course
GO
/****** Object:  StoredProcedure [dbo].[newstd]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[newstd] @fname varchar(10),@lname varchar(10),@email varchar(25),@phonenumber varchar(15),@dateofbirth date
as

insert into std values(@fname,@lname,@email,@phonenumber,@dateofbirth)
GO
/****** Object:  StoredProcedure [dbo].[searchbydate]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[searchbydate] @datefrom date ,@dateto date
as

select * from std
where std.dateofbirth between @datefrom and @dateto
GO
/****** Object:  StoredProcedure [dbo].[UpdateCourse]    Script Date: 8/21/2021 12:30:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[UpdateCourse] @Id int ,@CourseName varchar(10),@CoursePrice float
 as
 update  Course set CourseName=@CourseName,CoursePrice=@CoursePrice
 where courseId=@Id
GO
USE [master]
GO
ALTER DATABASE [students] SET  READ_WRITE 
GO
