# RankMath Dashboard Widget Plugin

## Description

This WordPress plugin adds a customizable dashboard widget using ReactJs, providing a dynamic and interactive visualization of data. The widget layout is based on [this wireframe](https://wireframe.cc/pro/pp/72549bdbc372266).

The plugin incorporates the [Recharts](https://recharts.org/en-US/) library for graph rendering, allowing the display of data in a visually appealing manner. Users can choose from three options in the dropdown menu to plot data: last 7 days, 15 days, and 1 month.

## Installation

1. Download the plugin zip folder or clone the repository.
2. Extract the contents into your WordPress plugins directory.
3. Activate the plugin through the WordPress admin interface.

## Usage

1. After activating the plugin, a new dashboard widget will appear on your WordPress dashboard.
2. Customize the widget by selecting the desired time frame from the dropdown menu.
3. The graph will dynamically update to display the relevant data based on your selection.

## Development Process

1. Created a plugin folder named `rankmath-widget`.
2. Developed a single page, `rankmath-widget.php`, to load the plugin data.
3. Utilized the `wp_add_dashboard_widget` function within `rankmath-widget.php` to create and display the dashboard widget.
4. Enqueued the necessary stylesheets and scripts using `admin_enqueue_scripts`.
5. Integrated the [React](https://reactjs.org/) library into WordPress using `@wordpress/scripts`.
6. Built and compiled React files using `npm install` and `npm start`.

## How to Edit and Rebuild

1. After making changes to the React files, run the following commands in the plugin directory:
   ```
   npm install
   npm start
   ```
2. This will rebuild the files and update the widget accordingly.

Feel free to customize and enhance the plugin to suit your specific needs! If you encounter any issues or have suggestions for improvement, please contribute to the repository or reach out to the plugin developer.

Happy WordPressing!
