package main

import (
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	jwtware "github.com/gofiber/jwt/v3"
	"github.com/golang-jwt/jwt/v4"
)

// Becareful! we should use github.com/golang-jwt/jwt/v4 which is same version in github.com/gofiber/jwt/v3

func main() {

	app := fiber.New(fiber.Config{})
	app.Use(logger.New())

	app.Post("/login", login)

	app.Get("/", accessible)

	app.Use(jwtware.New(jwtware.Config{
		SigningKey: []byte("abcdefg"),
	}))

	app.Get("/restricted", restricted)

	app.Listen(":3000")
}

func login(c *fiber.Ctx) error {
	user := c.FormValue("user")
	pass := c.FormValue("pass")

	// Throws Unauthorized error
	if user != "john" || pass != "doe" {
		return c.SendStatus(fiber.StatusUnauthorized)
	}

	// Create the Claims
	claims := jwt.MapClaims{
		"name":  "John Doe",
		"admin": true,
		"exp":   time.Now().Add(time.Hour * 72).Unix(),
	}

	// Create token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Generate encoded token and send it as response.
	t, err := token.SignedString([]byte("abcdefg"))

	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.JSON(fiber.Map{"token": t})
}

func accessible(c *fiber.Ctx) error {
	return c.SendString("Accessible")
}

func restricted(c *fiber.Ctx) error {
	u := c.Locals("user")
	user, _ := u.(*jwt.Token)
	log.Printf("%#v\n", user)
	claims := user.Claims.(jwt.MapClaims)
	name := claims["name"].(string)
	return c.SendString("Welcome " + name)
}
