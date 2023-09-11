import express from "express";
import { findLargestAndSmallest, findByName, returnAll } from "../helper.js";
import satelitesDataset from "../satellites-dataset.js";

const router = express.Router();

router.get("/", (_, response) => {
  try {
    const satellites = returnAll(satelitesDataset);
    if (!satellites) {
      return response.status(400);
    }
    return response.status(200).send(satellites);
  } catch (error) {
    console.log(error);
    return response.send(500);
  }
});

// 4.1 Find a satellite by name
router.get("/find/:name/", (request, response) => {
  try {
    const satellite = findByName(satelitesDataset, request.params.name);

    if (!satellite) {
      return response.send(500);
    }
    return response.status(200).json({ data: satellite });
  } catch (error) {
    console.log(error);
    return response.send(500);
  }
});

// 4.2 Find the largest or smallest satellite
router.get("/size", (request, response) => {
  try {
    const { pick } = request.query;

    const results = findLargestAndSmallest(satelitesDataset, "radius");
    if (!results) {
      return response.status(400);
    }

    if (pick === "largest") {
      return response.status(200).json({
        message: `The satellite with the largest radius is ${results.largest.name}, with a radius of ${results.largest.radius}`,
        data: results.largest,
      });
    }

    if (pick === "smallest") {
      return response.status(200).json({
        message: `The satellite with the smallest radius is ${results.smallest.name}, with a radius of ${results.smallest.radius}`,
        data: results.smallest,
      });
    }
  } catch (error) {
    console.log(error);
    return response.send(500);
  }
});

// 4.3 Find the densest or least dense satellite
router.get("/density", (request, response) => {
  try {
    const { pick } = request.query;

    const results = findLargestAndSmallest(satelitesDataset, "density");
    if (!results) {
      return response.status(400);
    }
    if (pick === "highest") {
      return response.status(200).json({
        message: `The satellite with the highest density is ${results.largest.name}, with a density of ${results.largest.density}`,
        data: results.largest,
      });
    }

    if (pick === "lowest") {
      return response.status(200).json({
        message: `The satellite with the lowest density is ${results.smallest.name}, with a density of ${results.smallest.density}`,
        data: results.smallest,
      });
    }
  } catch (error) {
    console.log(error);
    return response.send(500);
  }
});

export default router;
