package models

import "time"

type Note struct {
	NoteId       int       `json:"noteid"`
	Title        string    `json:"title"`
	Body         string    `json:"body"`
	CreatedAt    time.Time `json:"-"`
	UpdatedField time.Time `json:"-"`
}
