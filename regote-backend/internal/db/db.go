package db

import (
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
	"io/ioutil"
	"log"
	"regote-backend/internal/models"
)

// DB is a global database connection
var DB *sqlx.DB

// InitializeDB sets up the database connection and creates tables if they do not exist
func InitializeDB(connStr string) {
	var err error
	DB, err = sqlx.Connect("postgres", connStr)
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}

	// Create tables
	createTables()
}

// createTables reads the schema.sql file and executes the SQL commands
func createTables() {
	schema, err := ioutil.ReadFile("db/schema.sql")
	if err != nil {
		log.Fatalf("Failed to read schema file: %v", err)
	}

	_, err = DB.Exec(string(schema))
	if err != nil {
		log.Fatalf("Failed to create tables: %v", err)
	}
}

// InsertCompany inserts a company and its notes into the database
func InsertCompany(company *models.Company) error {
	tx, err := DB.Beginx()
	if err != nil {
		return err
	}

	// Insert company
	err = tx.Get(&company.ID, `INSERT INTO companies (name, date_added, primary_poc) VALUES ($1, $2, $3) RETURNING id`,
		company.Name, company.DateAdded, company.PrimaryPOC)
	if err != nil {
		tx.Rollback()
		return err
	}

	// Insert notes
	for i := range company.Notes {
		company.Notes[i].CompanyID = company.ID
		_, err := tx.Exec(`INSERT INTO notes (company_id, title, body, created_at, updated_at) VALUES ($1, $2, $3, $4, $5)`,
			company.Notes[i].CompanyID, company.Notes[i].Title, company.Notes[i].Body, company.Notes[i].CreatedAt, company.Notes[i].UpdatedAt)
		if err != nil {
			tx.Rollback()
			return err
		}
	}

	return tx.Commit()
}
