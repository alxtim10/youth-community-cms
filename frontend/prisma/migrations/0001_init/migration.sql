-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('DONE', 'NOT_DONE');

-- CreateTable
CREATE TABLE "members" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "gender" "Gender" NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fellowship_events" (
    "id" SERIAL NOT NULL,
    "month" VARCHAR(50) NOT NULL,
    "date" DATE NOT NULL,
    "theme" VARCHAR(255) NOT NULL,
    "bible_verse" VARCHAR(255) NOT NULL,
    "objective" TEXT NOT NULL,
    "theme_description" TEXT NOT NULL,
    "speaker" VARCHAR(255) NOT NULL,
    "speaker_pic" VARCHAR(255) NOT NULL,
    "speaker_status" "EventStatus" NOT NULL DEFAULT 'NOT_DONE',
    "mc" VARCHAR(255) NOT NULL,
    "musician" VARCHAR(255) NOT NULL,
    "worship_team_pic" VARCHAR(255) NOT NULL,
    "worship_team_status" "EventStatus" NOT NULL DEFAULT 'NOT_DONE',
    "attendance_count" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "fellowship_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "files" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "url" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

