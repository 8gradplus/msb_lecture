<style>
.small-list {
    font-size: 0.7em;
    list-style: none; /* Remove default list styling */
    counter-reset: section; /* Initialize counter */
}

.small-list li {
    counter-increment: section; /* Increment counter */
    margin-bottom: 0.5em; /* Add spacing between items */
}

.smaller-list {
    font-size: 0.6em;
    list-style: none; /* Remove default list styling */
    counter-reset: section; /* Initialize counter */
}

.smaller-list li {
    counter-increment: section; /* Increment counter */
    margin-bottom: 0.5em; /* Add spacing between items */
}

.small-text {
    font-size: 0.7em;
}

.smaller-text {
    font-size: 0.6em;
}
</style>

Where are we located during the lecture?

<img
  src="../assets/data_management/imgs/imgs.001.png"
  alt="Overview"
  style="
    width: 800px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

---

<span style="color: orange;">Outlook</span>

- The focus / goals of data management
- Data management architectures
- Deep-dive into lyvy's architecture
- Deep-dive into a realtime architecture
- Cloud vs. On-Premise
- Exercise: Design and Critique a Data Management Architecture yourself

---

<span style="color: orange;">The focus / goals of data management</span>

---

<span style="color: orange;">**Data Quality**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Ensure the accuracy, consistency, completeness, and reliability of data.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">High-quality data is essential for informed decision-making, reducing errors, and building trust in analytics.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Data cleansing to remove errors or duplicates.</span>
  - <span style="font-size: 0.8em;">Standardizing data formats and enforcing validation rules.</span>
  - <span style="font-size: 0.8em;">Continuous monitoring to detect and address quality issues.</span>

--

<span style="color: orange;">**Data Security**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Protect data from unauthorized access, breaches, and misuse.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Data breaches can lead to financial losses, legal consequences, and reputational damage.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Implementing encryption and secure access controls.</span>
  - <span style="font-size: 0.8em;">Regular security audits and vulnerability assessments.</span>
  - <span style="font-size: 0.8em;">Complying with regulations like GDPR, HIPAA, or CCPA.</span>

--

<span style="color: orange;">**Data Accessibility**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Ensure the right data is available to the right people at the right time.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Enhances productivity and decision-making by providing timely access to relevant data.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Implementing role-based access control (RBAC).</span>
  - <span style="font-size: 0.8em;">Developing intuitive data catalogs and search tools.</span>
  - <span style="font-size: 0.8em;">Minimizing data silos with integrated platforms.</span>

--

<span style="color: orange;">**Data Governance and Compliance**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Establish policies and processes for consistent, compliant, and ethical data usage.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Ensures legal compliance and ethical standards while reducing risk.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Creating data usage policies and training employees.</span>
  - <span style="font-size: 0.8em;">Documenting data lineage to track its origins and transformations.</span>
  - <span style="font-size: 0.8em;">Ensuring audit readiness with proper documentation.</span>

--

<span style="color: orange;">**Scalability**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Build systems and processes that handle growing data volumes and complexity without degradation in performance.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Organizations need to adapt to increasing data demands as they grow.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Using scalable storage and compute solutions (e.g., cloud platforms, distributed databases).</span>
  - <span style="font-size: 0.8em;">Implementing efficient ETL pipelines.</span>
  - <span style="font-size: 0.8em;">Designing data architectures for horizontal scaling.</span>

--

Short excursion:

<span style="color: lightgreen">horizontal vs. vertical scaling, whats the difference?</span>

--

<span style="color: orange;">**Data Integration**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Seamlessly combine data from multiple sources into a unified view.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Allows for comprehensive insights and avoids fragmented decision-making.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Using ETL/ELT tools to consolidate data.</span>
  - <span style="font-size: 0.8em;">Maintaining metadata and master data management practices.</span>
  - <span style="font-size: 0.8em;">Standardizing APIs and protocols for data exchange.</span>

--

<span style="color: orange;">**Data Availability and Continuity**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Minimize downtime and ensure data availability during disruptions.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Business operations rely on uninterrupted access to critical data.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Implementing redundancy and failover systems.</span>
  - <span style="font-size: 0.8em;">Conducting regular backups and testing recovery processes.</span>
  - <span style="font-size: 0.8em;">Using high-availability systems and disaster recovery plans.</span>

--

<span style="color: orange;">**Usability and Data Democratization**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Enable non-technical users to access and understand data.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Promotes data-driven decision-making across all levels of an organization.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Providing self-service BI tools.</span>
  - <span style="font-size: 0.8em;">Creating user-friendly dashboards and visualizations.</span>
  - <span style="font-size: 0.8em;">Offering training on data literacy.</span>

--

<span style="color: orange;">Cost Efficiency</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Minimize expenses related to storing, processing, and managing data while maintaining performance and scalability.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Reduces operational costs, supports scalability within budget constraints, and enables businesses to allocate resources more effectively to other critical areas.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="color: lightgreen;">It's your turn! What are cost drivers considering data infrastructures?</span>

--

<span style="color: orange;">Summary: data management provides the foundations for (operational) BI</span>

---

<span style="color: orange;">Data management architectures</span>

---

<span style="color: orange;">Data Warehouse</span>

--

<img
  src="../assets/data_management/imgs/imgs.002.png"
  alt="Data Warehouse"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

<span style="color: orange;">Description</span>

<ol class="small-list">
<li>A Data Warehouse serves as a central hub for storing structured data.</li>
<li>Information is collected from multiple sources, processed / ingested (ETL), and then stored in the Warehouse.</li>
<li>The design of a Data Warehouse resembles a well-structured library, enabling easy data retrieval and analysis.</li>
<li>This organization allows businesses to gain insights quickly, enhancing operational efficiency and decision-making.</li>
<li>Additionally, its structured data foundation supports robust Business Intelligence (BI) analysis.</li>
</ol>

--

<span style='color: lightgreen'>What can be high cost drivers in a pure data warehouse architecture?</span>

--

<span style="color: orange;">Some Pros</span>

<ol class="small-list">
<li>Transparent ETL processes helps to understand how data is created (e.g. using <em>dbt</em>)</li>
<li>Higher security: structured data organization in data marts</li>
<li>Very fast query processing</li>
<ul>
  <li>as only relevant data is saved as data marts the amount of data remains within limits</li>
  <li>typically relational databases are used, which are extremely performant within a certain data size limit</li>
</ul>
</ol>

--

Short Excursion: What are relevant topics within the <span style="color: orange;">ETL</span> process?

- schema documentation
- traceability of the data marts created (dependency graphs)
- configurable fault tolerance with monitoring
- testing with logging

--

<span style="color: orange;">Some Cons</span>

<ol class="small-list">
<li>as intermediate data tables (like staging tables) are typically not persisted, troubleshooting can be difficult (virtual tables / views vs. physical tables / materialized)</li>
<li>changes in schema of data marts can be very expensive (reload external data sources)</li>
<li>loss of data can occur if data on external data sources has a short retention period</li>
<li>explorative data tasks based on raw- and intermediate data (staging) not possible</li>
<li>not suitable for machine learning tasks on unstructured data</li>
</ol>

--

Short Excursion: <span style="color: lightgreen;">What is a view? What is a materialized view in a relational database like PostgreSQL?</span>

---

<span style="color: orange;">Data Lake</span>

--

<img
  src="../assets/data_management/imgs/imgs.003.png"
  alt="Data Lake"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

<span style="color: orange;">Description</span>

<ol class="small-list">
<li>A Data Lake serves as a central hub for storing all kinds of data</li>
<li>Information is extracted and directly loaded into the storage, <b>without transformations.</b></li>
<li>The design of a Data Lake resembles a copy of the original data sources, enabling data exploration, data science and machine learning tasks.</li>
<li>This organization allows businesses to persist data sources and making them long-term available.</li>
</ol>

--

<span style = "color: lightgreen">Please provide a short list of pros and cons for the Data Lake.</span>

--

<span style="color: orange;">Some Pros</span>

<!-- - high flexibility, agility and no limits regarding
  - data format structure
  - type of data
  - amount of data
- typically low costs on storage size (roughly ranges from $0.01 to $0.025 / GB / month) -->

--

<span style="color: orange;">Some Cons</span>

<!-- - higher costs on processing the data (no free lunch)
- lack of structure, therefore lack of transparency: risk of becoming a data swamp
- security challenges: might be challenging to identify security threats because of vast amount of data in vast amount of formats
- no default query execution: another tooling is necessary -->

---

<span style="color: orange;">Hybrid Data Lake</span>

--

<img
  src="../assets/data_management/imgs/imgs.004.png"
  alt="Hybrid Data Lake"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

<span style="color: orange;">Description</span>

<ol class="small-list">
<li>A Hybrid Data Lake combines the advantages of Data Warehouses and Data Lakes</li>
<li>to the expense of complexity.</li>
</ol>

--

Regarding costs, in a Hybrid Data Lake setting, the amount of storage is increased.

<span style = "color: lightgreen">When is it still advisable?</span>

---

<span style="color: orange;">Data Lakehouse</span>

--

<img
  src="../assets/data_management/imgs/imgs.005.png"
  alt="Lakehouse"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

<span style="color: orange;">Description</span>

<ol class="small-list">
<li>A Lakehouse combines the advantages of Data Warehouses and Data Lakes</li>
<li>and still keeps complexity low.</li>
<li>Often standalone query engine is necessary.</li>
</ol>

<span style = "color: lightgreen">So what is a potential disadvantage of this structure? (Remember there is no free lunch!)</span>

--

<span style="color: orange;">Hybrid Data Lake or Lakehouse?</span>

<!-- - Hybrid Data Lake can provide high performance (low latency for e.g. operational BI) data with cheap data query costs
- Lakehouse lower complexity, less expenses regarding maintenance and still good performance, sufficient for most cases -->

---

<span style='color:red'>Don't think of these architectures as being set in stone. They all have advantages and disadvantages and are applied in modified and combined forms.</span>

---

<span style="color: orange;">On-Premises vs. Cloud</span>

<span style="color: lightgreen;">
Please study the following link and explain with your words the difference between On-Premises and Cloud.
What different levels are there in the cloud sector and how do they differ?
</span>

[On-Premises vs. Cloud](https://www.bmc.com/blogs/saas-vs-paas-vs-iaas-whats-the-difference-and-how-to-choose/)

---

<span style="color: orange;">Deep-dive into lyvy's architecture</span>

--

<img
  src="../assets/data_management/imgs/imgs.007.png"
  alt="Lakehouse"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

---

<span style="color: orange;">Deep-dive into a realtime architecture</span>

---

<span style="color: orange;">Exercise</span>: Design and Critique a Data Management Architecture yourself

--

<span style="color: orange;">Scenario</span>

<ol class="small-text">
You are a consultant tasked with designing a data management architecture for an upcoming start-up, called DebtRay, handling expensive raw data from multiple providers (e.g. Bloomberg, London Stock Exchange). The architecture must address several challenges, including cost, scalability, and flexibility.
</ol>

<ol class="small-text">DebtRay's business model is the quantification and assessment of companies bond emissions.</ol>

--

<span style="color: orange;">Procedure</span>

<ol class="smaller-list">
<li>Design Phase
    <ul>
        <li>Based on the provided key points, draft a data management architecture that balances costs, risks, and scalability.</li>
        <li>Describe each component of your architecture and justify your decisions.</li>
    </ul>
</li>
<li>Comparison Phase
    <ul>
        <li>Compare your architecture to the provided actual architecture.</li>
        <li>Identify strengths and weaknesses of both approaches.</li>
    </ul>
</li>
<li>Critique Phase
    <ul>
        <li>Suggest improvements for the actual architecture and for your own design.</li>
        <li>Focus on aspects like scalability, cost efficiency, and handling schema changes.</li>
    </ul>
</li>
</ol>

--

<span style="color: orange;">Key Facts of the Business</span>

--

<span style="color: orange;">General Business</span>

- not certain that business idea works and scales
- starting with just one person in the role as full stack data alchemist
- first implementation time is limited and must proceed quickly
- next to analytical services, the business provides machine learning models for predictions

--

<span style="color: orange;">Data</span>

- high-priced external data as the basis for core business (Bloomberg / London Stock Exchange)
- data volumes manageable in the range under 1 GB
- live data desirable but not absolutely necessary, at least one update per month

--

<span style="color: orange;">Data Aggregation</span>

- Processes: De-duplication, combining raw data, imputing, interpolating, sanity checks, and replay capabilities.
- Challenges: Complex workflows due to messy raw data and evolving requirements.
- Compatibility: Must handle schema evolution in raw data.

--

<span style="color: orange;">Reporting / Monitoring</span>

- CFO should get information about costs
- CEO should get information about customers and corresponding KPIs
- CTO should get information about the state of the data infrastructure (Everything up and running? Did we face errors somewhere?)

--

<span style="color: lightgreen;">Design a Data Management Architecture</span>

Checklist

<ol class = "small-list">
<li>Provide schematic flowchart of your designed architecture.</li>
<li>Add names of tools for the different steps. (google for it, make proposals)</li>
<li>How does your architecture address the economic risk associated with raw data?</li>
<li>Does your design support future scalability and modularity?</li>
<li>How do you handle schema changes in raw data?</li>
<li>Compare the costs of your architecture with the current one (e.g. storage, compute, backup).</li>
<li>What trade-offs did you make in your design, and why?</li>
</ol>

--

<span style="color: lightgreen;">Criticize Debtray's Architecture</span>

<img
  src="../assets/data_management/imgs/imgs.006.png"
  alt="Debtray Architecture"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

---

- Finops
- Data Availability (Retention time)
- live vs. prelive / staging vs. live
- snowflake vs. clickhouse

---

[Main Reference](https://sigma.software/about/media/how-to-choose-the-best-type-of-data-storage-architecture)
