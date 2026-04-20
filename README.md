# Web Development Project 7 - Crewmates

Submitted by: **Shirina Shaji Daniel**

This web app: **allows users to create, view, edit, and delete custom crewmates using a Supabase database. Users can assign categories to crewmates, which changes the role options available during creation and editing. The app also includes a gallery with summary statistics and a custom crew success metric that changes the appearance of the crewmate list.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The web app contains a page that features a create form to add a new crewmate**
  - [x] Users can name the crewmate
  - [x] Users can set the crewmate’s attributes by clicking on one of several values

- [x] **The web app includes a summary page of all the user’s added crewmates**
  - [x] The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
  - [x] The summary page is sorted by creation date such that the most recently created crewmates appear at the top

- [x] **A previously created crewmate can be updated from the list of crewmates in the summary page**
  - [x] Each crewmate has an edit button that will take users to an update form for the relevant crewmate
  - [x] Users can see the current attributes of their crewmate on the update form
  - [x] After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page 

- [x] **A previously created crewmate can be deleted from the crewmate list**
  - [x] Using the edit form detailed in the previous _crewmates can be updated_ feature, there is a button that allows users to delete that crewmate
  - [x] After deleting a crewmate, the crewmate should no longer be visible in the summary page

- [x] **Each crewmate has a direct, unique URL link to an info page about them**
  - [x] Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
  - [x] The detail page contains extra information about the crewmate not included in the summary page
  - [x] Users can navigate to the edit form from the detail page

The following **optional** features are implemented:

- [x] A crewmate can be given a category upon creation, which restricts their attribute value options
  - [x] Users can choose a `category` option before finalizing role selection
  - [x] Based on the category value, users are allowed to access only a subset of the possible roles/attributes

- [x] A section of the summary page displays summary statistics about a user’s crew on their crew page
  - [x] The crew page shows totals and percentages for selected crew attributes and categories

- [x] The summary page displays a custom “success” metric about a user’s crew, which changes the look of the crewmate list
  - [x] The gallery styling changes based on the computed crew success score

The following **additional** features are implemented:

- [x] Sidebar-based themed layout inspired by the exemplar
- [x] Dark-mode styled interface with custom card-based forms
- [x] Dynamic crew category and role system
- [x] Persistent Supabase backend integration for CRUD functionality

## Video Walkthrough

Here's a walkthrough:

<img src="walkthrough-week8.gif" title="Video Walkthrough" width="" alt="Video Walkthrough" />

## Notes

One challenge was setting up Supabase correctly, especially finding the API URL and publishable key and making sure the frontend connected successfully. Another challenge was styling the project to better match the exemplar layout while also implementing the required CRUD functionality and the optional category/statistics/success metric features.

## License

    Copyright 2026 Shirina Shaji Daniel

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
